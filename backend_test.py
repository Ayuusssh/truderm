import requests
import json
import sys
from datetime import datetime, timedelta

class TruDermAPITester:
    def __init__(self, base_url="https://skin-clinic-bhopal.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, passed, details=""):
        """Log a test result"""
        self.tests_run += 1
        if passed:
            self.tests_passed += 1
            status = "✅ PASSED"
        else:
            status = "❌ FAILED"
        
        result = f"{status} - {name}"
        if details:
            result += f" - {details}"
        
        print(result)
        self.test_results.append({
            "name": name,
            "passed": passed,
            "details": details
        })
        return passed

    def test_api_root(self):
        """Test the root API endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            passed = response.status_code == 200
            details = f"Status: {response.status_code}"
            if passed:
                try:
                    data = response.json()
                    details += f", Response: {data.get('message', 'No message')}"
                except:
                    details += ", Invalid JSON response"
            return self.log_test("API Root Endpoint", passed, details)
        except Exception as e:
            return self.log_test("API Root Endpoint", False, f"Exception: {str(e)}")

    def test_create_appointment(self):
        """Test creating an appointment"""
        try:
            # Test data
            appointment_data = {
                "name": f"Test Patient {datetime.now().strftime('%H%M%S')}",
                "phone": "+91 9876543210",
                "service": "Acne Treatment",
                "preferred_date": (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d"),
                "message": "Test appointment booking"
            }
            
            response = requests.post(
                f"{self.api_url}/appointments",
                json=appointment_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            passed = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if passed:
                try:
                    data = response.json()
                    if "id" in data and "name" in data:
                        details += f", Created appointment ID: {data['id']}, Name: {data['name']}"
                        self.created_appointment_id = data['id']
                    else:
                        passed = False
                        details += ", Missing required fields in response"
                except Exception as e:
                    passed = False
                    details += f", JSON parsing error: {str(e)}"
            else:
                try:
                    error_data = response.text
                    details += f", Error: {error_data[:200]}"
                except:
                    pass
            
            return self.log_test("Create Appointment", passed, details)
            
        except Exception as e:
            return self.log_test("Create Appointment", False, f"Exception: {str(e)}")

    def test_get_appointments(self):
        """Test retrieving appointments"""
        try:
            response = requests.get(f"{self.api_url}/appointments", timeout=10)
            passed = response.status_code == 200
            details = f"Status: {response.status_code}"
            
            if passed:
                try:
                    appointments = response.json()
                    if isinstance(appointments, list):
                        details += f", Retrieved {len(appointments)} appointments"
                        if hasattr(self, 'created_appointment_id') and appointments:
                            # Check if our created appointment exists
                            found = any(apt.get('id') == self.created_appointment_id for apt in appointments)
                            if found:
                                details += ", Created appointment found in list"
                            else:
                                details += ", Created appointment not found in list"
                    else:
                        passed = False
                        details += ", Response is not a list"
                except Exception as e:
                    passed = False
                    details += f", JSON parsing error: {str(e)}"
            
            return self.log_test("Get Appointments", passed, details)
            
        except Exception as e:
            return self.log_test("Get Appointments", False, f"Exception: {str(e)}")

    def test_appointment_validation(self):
        """Test appointment creation with invalid data"""
        try:
            # Test with missing required fields
            invalid_data = {
                "name": "",  # Empty name
                "phone": "",  # Empty phone
                "service": "",  # Empty service
                "preferred_date": ""  # Empty date
            }
            
            response = requests.post(
                f"{self.api_url}/appointments",
                json=invalid_data,
                headers={"Content-Type": "application/json"},
                timeout=10
            )
            
            # Should return an error (422 for validation or 400 for bad request)
            passed = response.status_code in [400, 422]
            details = f"Status: {response.status_code}"
            
            if not passed:
                details += " (Expected validation error for empty fields)"
            else:
                details += " (Correctly rejected invalid data)"
            
            return self.log_test("Appointment Validation", passed, details)
            
        except Exception as e:
            return self.log_test("Appointment Validation", False, f"Exception: {str(e)}")

    def test_cors_headers(self):
        """Test CORS headers are present"""
        try:
            response = requests.options(f"{self.api_url}/appointments", timeout=10)
            cors_header = response.headers.get('Access-Control-Allow-Origin')
            passed = cors_header is not None
            details = f"CORS header: {cors_header}" if cors_header else "No CORS header found"
            
            return self.log_test("CORS Headers", passed, details)
            
        except Exception as e:
            return self.log_test("CORS Headers", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🔍 Testing TruDerm Backend API at: {self.api_url}")
        print("=" * 60)
        
        # Run tests in sequence
        self.test_api_root()
        self.test_create_appointment()
        self.test_get_appointments()
        self.test_appointment_validation()
        self.test_cors_headers()
        
        # Summary
        print("\n" + "=" * 60)
        print(f"📊 Backend Tests Summary: {self.tests_passed}/{self.tests_run} passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All backend tests passed!")
        else:
            print("⚠️  Some backend tests failed!")
        
        return self.tests_passed == self.tests_run

def main():
    tester = TruDermAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())
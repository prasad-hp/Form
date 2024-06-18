from django.shortcuts import render

# Create your views here.
# myapp/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Disable CSRF for simplicity (for development purposes)
def data_handler(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            number1 = int(data.get('number1'))
            number2 = int(data.get('number2'))
            number3 = int(data.get('number3'))
            
            sum_result = number1 + number2 + number3
            
            return JsonResponse({'sum': sum_result}, status=200)
        except Exception as e:
            print("Error processing request:", e)
            return JsonResponse({'message': 'Server error'}, status=500)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)

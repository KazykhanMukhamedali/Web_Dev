from django.test import TestCase

# Create your tests here.
@api (['GET'])
def top_ten(request):
    model = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer(model, many=True)
    return Response(serializer_class.data)

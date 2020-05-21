from .models import Joke
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api.serializers import JokeSerializer
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse


@api_view(['GET', 'POST'])
def jokes(request):
   
    try:
        joke_post = Joke.objects.all()

    except Joke.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        data = {}
        serializer = JokeSerializer(joke_post, many= True)
        data['data']= serializer.data
        return Response(data)

    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = JokeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['DELETE'])
def jokesdetail(request, pk):
   
    try:
        joke = Joke.objects.get(pk=pk)
    except joke.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'DELETE':
        joke.delete()
        return HttpResponse(status=204)   


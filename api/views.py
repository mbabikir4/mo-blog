from django.shortcuts import render
from rest_framework.views import APIView
from . import serializers,models
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# Create your views here.
from rest_framework import generics,mixins

class DataFormCreateGet(mixins.CreateModelMixin,mixins.ListModelMixin, generics.GenericAPIView):
    queryset = models.DataForm.objects.all()
    # authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = serializers.DataFormSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)



class DataFormUpdateDelete(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = models.DataForm.objects.all()
    serializer_class = serializers.DataFormSerializer

    def get(self,request,pk):
        return self.retrieve(request,pk)
        
    def put(self,request,pk):
        return self.update(request,pk)

    def delete(self,request,pk):
        return self.destroy(request,pk)


class BlogGet(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    parser_classes = [MultiPartParser, FormParser]
    authentication_classes=[]
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogSerializer

    def get(self,request):
        return self.list(request)

    def post(self, request, format=None):
        print(request.data)
        serializer = serializers.BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostDeletePut(mixins.RetrieveModelMixin,mixins.UpdateModelMixin,mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogSerializer

    def get(self,request, pk):
        return self.retrieve(request,pk)

    def put(self,request,pk):
        return self.update(request,pk)

    def delete(self,request,pk):
        return self.destroy(request,pk)



class UserAvatarUpload(APIView):
    permission_classes=[IsAuthenticated]
    parser_classes=[MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = serializers.FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserJoditUpload(APIView):
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]
    parser_classes=[MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = serializers.FileJoditSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()

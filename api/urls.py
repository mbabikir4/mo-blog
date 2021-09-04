"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from . import views

urlpatterns = [
    re_path(r'^rest-auth/', include('rest_auth.urls')),
    re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    path('data/', views.DataFormCreateGet.as_view()),
    path('data/<str:pk>', views.DataFormUpdateDelete.as_view()),
    path('blogs/', views.BlogGet.as_view()),
    path('blogs/<int:pk>', views.PostDeletePut.as_view()),
    path('upload/', views.UserAvatarUpload.as_view()),
    path('upload/jodit/', views.UserJoditUpload.as_view())



    
]

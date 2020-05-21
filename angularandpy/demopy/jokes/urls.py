
from django.urls import path
from . import views

urlpatterns = [
    path('jokes',views.jokes,name='jokes'),
    path('jokes/<int:pk>',views.jokesdetail,name='jokes'),

]

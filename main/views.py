from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MemberSerializer, DoneListSerializer, LikeSerializer, DoneContentSerializer
from .models import Member, DoneList, Like
# Create your views here.

class MemberViewset(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

member_list = MemberViewset.as_view({
    'get': 'list',
    'post': 'create'
})

member_detail = MemberViewset.as_view({
        'get': 'retrieve',
        'patch': 'partial_update',
    })

class DoneListViewset(viewsets.ModelViewSet):
    queryset = DoneList.objects.all()
    serializer_class = DoneListSerializer

donelist_list = DoneListViewset.as_view({
    'get': 'list',
    'post': 'create'

})

donelist_detail = DoneListViewset.as_view({
    'get': 'retrieve',      #싱글 object
    'patch': 'partial_update',
})


class LikeViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

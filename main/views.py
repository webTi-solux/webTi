from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from .serializers import MemberSerializer, DoneListSerializer, LikeSerializer, LikeContentSerializer
from .models import Member, DoneList, Like, Comment, DM


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

like_list = LikeViewset.as_view({
    'get': 'list',
    'post': 'create'
})

like_detail = LikeViewset.as_view({
    'get': 'retrieve',
    'delete': 'destroy'
})

class LikeContentViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeContentSerializer

likecontent_list = LikeContentViewset.as_view({
    'get' : 'list'
})
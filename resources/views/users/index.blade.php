@extends('layouts.app')

@section('content')

<div class="container">
@include('helpers.messages')
    <div class="row">
        <div class="col-6">
            <h1><i class="fa-solid fa-users"></i>Lista użytkowników</h1>
        </div>
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Email</th>
        <th scope="col">Imię</th>
        <th scope="col">Nazwisko</th>
        <th scope="col">Numer telefonu</th>
        <th scope="col">Akcje</th>
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
            <tr>
                <th scope="row">{{$user->id}}</th>
                <td>{{$user->email}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->surname}}</td>
                <td>{{$user->phone_number}}</td>
                <td>
                    <a href="{{ route('users.edit', $user->id) }}">
                        <button class="btn btn-success btn-sm"><i class="fa-solid fa-pen-to-square"></i></button>
                    </a>
                    <button class="btn btn-danger btn-sm delete" data-id="{{$user->id}}"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
        @endforeach
    </tbody>
    </table>
    {{$users->links()}}
</div>
@endsection
@section('javascript')
    const deleteUrl = "{{ url('users') }}/";
    const confirmDelete = "{{ __('shop.message.delete') }}";
@endsection
@section('js-files')
<script src="{{ asset('js/delete.js') }}"></script>
@endsection

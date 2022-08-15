<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\HelloWorldController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [WelcomeController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function(){
    Route::middleware(['can:isAdmin'])->group(function(){
    Route::resource('products', ProductController::class);

    Route::delete('/users/{user}', [UserController::class, 'destroy']);
    Route::get('/users/list', [UserController::class, 'index']);
    });
    Route::get('/cart/list', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/{product}', [CartController::class, 'store'])->name('cart.store');
    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Auth::routes(['verify' => true]);



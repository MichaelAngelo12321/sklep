<?php

namespace App\Http\Controllers;
use Illuminate\View\View;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;

class WelcomeController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view('welcome', [
            'products' => Product::paginate(10),
            'categories' => ProductCategory::orderBy('name', 'ASC')->get()
        ]);
    }
}

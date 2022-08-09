<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Jedzenie'],
            ['name' => 'Akcesoria'],    
            ['name' => 'Elektronika'],
            ['name' => 'Odzież'],
            ['name' => 'Inne'],

        ];
        ProductCategory::insert($data);
    }
}

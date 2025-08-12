<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Aliziodev\LaravelTaxonomy\Facades\Taxonomy;
use Aliziodev\LaravelTaxonomy\Enums\TaxonomyType;
class TaxonomySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $electronics = Taxonomy::create([
            'name' => 'Test Type 1',
            'type' => 'DESTINATION TYPE',
            'description' => 'Test Type 1',
        ]);
        $electronics = Taxonomy::create([
            'name' => 'Test Type 2',
            'type' => 'DESTINATION TYPE',
            'description' => 'Test Type 2',
        ]);
        $electronics = Taxonomy::create([
            'name' => 'Test Type 3',
            'type' => 'DESTINATION TYPE',
            'description' => 'Test Type 3',
        ]);
    }
}

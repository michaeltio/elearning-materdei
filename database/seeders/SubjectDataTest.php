<?php

namespace Database\Seeders;

use App\Models\SubjectData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubjectDataTest extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Introduction to Algebra',
            'desc' => 'This module covers the basic principles of algebra, including operations with variables and solving equations.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Advanced Logarithmic Functions',
            'desc' => 'Explore the intricacies of logarithmic functions, including properties and applications in mathematics.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Reflections in Mirrors',
            'desc' => 'Learn about the physics of reflections in mirrors and their applications in real-world scenarios.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Optics of Lenses',
            'desc' => 'Discover the optical principles behind lenses and their role in vision and imaging systems.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Chemical Reactions in Action',
            'desc' => 'An in-depth exploration of chemical reactions, their mechanisms, and practical applications in daily life.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'The Wonders of Genetics',
            'desc' => 'Delve into the fascinating world of genetics, understanding DNA, genes, and their impact on living organisms.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Analytical Geometry Essentials',
            'desc' => 'Master the fundamental concepts of analytical geometry, covering points, lines, and conic sections.'
        ]);
        
        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Advanced Calculus Techniques',
            'desc' => 'Take your calculus skills to the next level with advanced techniques, including integrals and differential equations.'
        ]);   
    }
}

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
        // Subject: Mat01 (Mathematics)
        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Algebraic Expressions and Equations',
            'desc' => 'Explore the fundamentals of algebra, focusing on expressions, equations, and their applications in solving real-world problems.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Geometry: Shapes and Properties',
            'desc' => 'Dive into the world of geometry, studying different shapes, their properties, and the principles governing spatial relationships.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Mathematical Proofs and Logic',
            'desc' => 'Learn the art of mathematical proof and logical reasoning, essential skills in advanced mathematics.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Trigonometry: Angles and Identities',
            'desc' => 'Master the principles of trigonometry, exploring angles, identities, and their applications in various mathematical contexts.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat01',
            'title' => 'Statistics and Data Analysis',
            'desc' => 'Gain insights into statistical methods and data analysis techniques, essential in drawing meaningful conclusions from data.',
        ]);

        // Repeat the above pattern for Mat01 with different titles and descriptions

        // Subject: IPA02 (Natural Sciences)
        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Ecology and Environmental Science',
            'desc' => 'Explore the intricate relationships between living organisms and their environments, addressing environmental challenges.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Cell Biology and Microorganisms',
            'desc' => 'Study the structure and function of cells, delving into cell biology and the fascinating world of microorganisms.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Physics: Energy and Motion',
            'desc' => 'Understand the principles of physics related to energy, motion, and the fundamental forces shaping the physical world.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Genetics and Evolutionary Biology',
            'desc' => 'Explore the principles of genetics and the mechanisms driving evolutionary processes in living organisms.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA02',
            'title' => 'Astronomy: Celestial Phenomena',
            'desc' => 'Survey the cosmos, examining celestial phenomena such as stars, galaxies, and cosmic events.',
        ]);

        // Repeat the above pattern for IPA02 with different titles and descriptions

        // Subject: IPA06 (Chemistry)
        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Chemical Kinetics and Reaction Mechanisms',
            'desc' => 'Investigate the speed and mechanisms of chemical reactions, exploring the field of chemical kinetics.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Inorganic Chemistry: Elements and Compounds',
            'desc' => 'Examine the properties and reactions of inorganic compounds, exploring the diverse world of chemical elements.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Biochemistry: Biomolecules and Metabolism',
            'desc' => 'Delve into the realm of biochemistry, studying biomolecules and metabolic processes in living organisms.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Organic Synthesis and Stereochemistry',
            'desc' => 'Explore the art of organic synthesis, understanding stereochemistry and the creation of complex organic compounds.',
        ]);

        SubjectData::create([
            'subjectId' => 'IPA06',
            'title' => 'Environmental Chemistry',
            'desc' => 'Investigate the impact of chemical processes on the environment, addressing environmental challenges through chemistry.',
        ]);

        // Repeat the above pattern for IPA06 with different titles and descriptions

        // Subject: Mat03 (Advanced Mathematics)
        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Multivariable Calculus and Vector Analysis',
            'desc' => 'Extend your calculus skills to multiple variables, exploring concepts like vectors, gradients, and multiple integrals.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Differential Equations: Modeling and Solutions',
            'desc' => 'Learn to model real-world phenomena with differential equations, mastering various methods for solving these mathematical models.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Number Theory and Cryptography',
            'desc' => 'Delve into the beauty of number theory and its applications in cryptography, exploring the mathematics behind secure communication.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Topology: Spaces and Transformations',
            'desc' => 'Explore the abstract world of topology, studying spaces and transformations that provide insights into the nature of mathematical structures.',
        ]);

        SubjectData::create([
            'subjectId' => 'Mat03',
            'title' => 'Advanced Probability Theory',
            'desc' => 'Deepen your understanding of probability theory, exploring advanced concepts and their applications in various fields.',
        ]);

        // Repeat the above pattern for Mat03 with different titles and descriptions

        // Add more subjects as needed

        // Note: Manually adjust titles and descriptions for each entry based on educational content
    }
}

<?php

use Faker\Generator as Faker;

$factory->define(\App\models\Article::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'description' => $faker->text,
        'image' => $faker->imageUrl($width = 640, $height = 480),
        'status' => $faker->numberBetween($min = 0, $max = 3)
    ];
});

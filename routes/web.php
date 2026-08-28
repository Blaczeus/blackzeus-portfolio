<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'portfolio/Home')->name('home');
Route::inertia('/about', 'portfolio/About')->name('about');
Route::inertia('/projects', 'portfolio/Projects')->name('projects');
Route::inertia('/planner', 'portfolio/Planner')->name('planner');
Route::inertia('/contact', 'portfolio/Contact')->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

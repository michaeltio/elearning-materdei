<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StudentMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        if ($request->user() && $request->user()->userDetails->role == "student") {
            return $next($request);
        } else if ($request->user() && $request->user()->userDetails->role == "teacher") {
            return redirect()->intended('/teacher');
        } else if ($request->user() && $request->user()->userDetails->role == "admin") {
            return redirect()->intended('/admin');
        }
    }
}

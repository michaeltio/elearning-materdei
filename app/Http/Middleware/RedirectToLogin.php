<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectToLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->userDetails) {
            $role = Auth::user()->userDetails->role;

            if ($role == "admin") {
                return redirect()->route('adminHome');
            } elseif ($role == "teacher") {
                return redirect()->route('teacherHome');
            } elseif ($role == "student") {
                return redirect()->route('studentHome');
            }
        } else {
            // Redirect unauthenticated users to the login page
            return redirect()->route('login');
        }

        return $next($request);
    }
}

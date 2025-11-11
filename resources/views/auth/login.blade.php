<x-guest-layout>
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <div class="login-form-card">
        
        <div class="login-logo">
            <img src="{{ asset('images/logo-namayan.png') }}" alt="1N Namayan Logo">
        </div>
        
        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div>
                <x-input-label for="username" :value="__('Username')" />
                <x-text-input id="username" class="block mt-1 w-full"
                              type="text" 
                              name="username" 
                              :value="old('username')" 
                              required 
                              autofocus 
                              autocomplete="username" />
                <x-input-error :messages="$errors->get('username')" class="mt-2" />
            </div>

            <div class="mt-4">
                <x-input-label for="password" :value="__('Password')" />
                <x-text-input id="password" class="block mt-1 w-full"
                                type="password"
                                name="password"
                                required 
                                autocomplete="current-password" />
                <x-input-error :messages="$errors->get('password')" class="mt-2" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <x-primary-button class="ms-3">
                    {{ __('Log in') }}
                </x-primary-button>
            </div>
        </form>
    </div>
</x-guest-layout>
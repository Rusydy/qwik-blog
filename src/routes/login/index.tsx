import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {

  const authCredentials = useStore({
    username: '',
    password: '',
  });



  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4 text-center">
          Login
          </h2>
        <form class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              onInput$={(e) => {
                if (e.target) {
                  const inputElement = e.target as HTMLInputElement;
                  authCredentials.username = inputElement.value;
                }
              }}

              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              onInput$={(e) => {
                if (e.target) {
                  const inputElement = e.target as HTMLInputElement;
                  authCredentials.password = inputElement.value;
                }
              }}

              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            preventdefault:click 
            onClick$ = {
              () => {
                alert(`Username: ${authCredentials.username}, Password: ${authCredentials.password}`);
              }
            }

            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>

          <div class="text-center text-sm">
            Didn't have an account?
            <a href="/register" class="text-blue-500 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
});

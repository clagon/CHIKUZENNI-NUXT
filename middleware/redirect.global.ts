export default defineNuxtRouteMiddleware((to) => {
	if (to.path === "/teacher") {
		return navigateTo("/teacher/login", { redirectCode: 301 });
	}
	if (to.path === "/student") {
		return navigateTo("/student/login", { redirectCode: 301 });
	}
});

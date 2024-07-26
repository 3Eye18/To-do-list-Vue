import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
    app.component (
        "form-layout",
        defineAsyncComponent(() => import("@/layouts/form"))
    );

    app.component (
        "table-layout",
        defineAsyncComponent(() => import("@/layouts/table"))
    );
}
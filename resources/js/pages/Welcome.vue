<script setup lang="ts">
import OpenKiosk from '@/components/kiosk/OpenKiosk.vue';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { login, logout } from '@/routes';
import dashboard from '@/routes/dashboard';
import kiosk from '@/routes/kiosk';
import { AppPageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/vue3';
import { useColorMode } from '@vueuse/core';
import { LayoutDashboard, Monitor } from 'lucide-vue-next';

const mode = useColorMode();

const page = usePage<AppPageProps>();
</script>

<template>
    <Head title="Welcome" />
    <div class="mx-auto flex h-screen max-w-xl items-center">
        <div class="w-full space-y-2">
            <template v-if="!page.props.auth.user">
                <OpenKiosk />
                <Link :href="login()" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')">
                    <LayoutDashboard />
                    LOGIN TO DASHBOARD
                </Link>
            </template>
            <template v-else>
                <template v-if="page.props.auth.user.role !== 'KIOSK'">
                    <Link :href="dashboard.index()" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')">
                        <LayoutDashboard />
                        OPEN DASHBOARD
                    </Link>
                    <Link :href="logout()" method="post" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')">
                        <LayoutDashboard />
                        LOGOUT DASHBOARD
                    </Link>
                </template>
                <template v-else>
                    <Link :href="kiosk.index()" :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')">
                        <Monitor />
                        OPEN KIOSK
                    </Link>
                </template>
            </template>
        </div>
    </div>
</template>

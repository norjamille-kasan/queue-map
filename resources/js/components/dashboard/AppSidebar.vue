<script setup lang="ts">
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { redirect } from '@/routes';
import dashboard from '@/routes/dashboard';
import kioskSettings from '@/routes/dashboard/kiosk-settings';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { ComputerIcon, LayoutGrid } from 'lucide-vue-next';
import AppLogo from '../AppLogo.vue';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
        icon: LayoutGrid,
        absolute: true,
    },
    {
        title: 'Kiosk Settings',
        href: kioskSettings.index().url,
        icon: ComputerIcon,
        absolute: true,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="redirect()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain label="Platform" :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <!-- <NavFooter :items="footerNavItems" /> -->
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>

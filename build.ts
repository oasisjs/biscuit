import { build } from 'https://deno.land/x/dnt@0.26.0/mod.ts';

await Deno.remove('npm', { recursive: true }).catch((_) => {});

await build({
    compilerOptions: {
        lib: ['webworker', 'es2020'],
    },
    shims: {
        custom: [
            {
                package: {
                    name: 'ws',
                    version: '^8.4.0',
                },
                globalNames: [
                    {
                        name: 'WebSocket',
                        exportName: 'default',
                    },
                ],
            },
        ],
    },
    package: {
        author: 'Yuzuru',
        name: '@oasisjs/biscuit',
        version: Deno.args[0],
        description: ' brand new bleeding edge non bloated Discord library',
        license: 'Apache License 2.0',
        repository: {
            type: 'git',
            url: 'git+https://github.com/oasisjs/biscuit.git',
        },
        bugs: {
            url: 'https://github.com/oasisjs/biscuit/issues',
        },
        typesVersions: {
            '*': {
                '*': ['./types/mod.d.ts'],
                'biscuit': ['./types/packages/biscuit/mod.d.ts'],
                'discordeno': ['./types/packages/discordeno/mod.d.ts'],
                'cache': ['./types/packages/cache/mod.d.ts'],
            },
        },
    },
    entryPoints: [
        './mod.ts',
        {
            name: './biscuit',
            path: 'packages/biscuit/mod.ts',
        },
        {
            name: './discordeno',
            path: 'packages/discordeno/mod.ts',
        },
        {
            name: './cache',
            path: 'packages/cache/mod.ts',
        },
    ],
    outDir: './npm',
    declaration: true,
    typeCheck: false,
    test: false,
});

// post build steps
Deno.copyFileSync('LICENSE', 'npm/LICENSE');
Deno.copyFileSync('README.md', 'npm/README.md');

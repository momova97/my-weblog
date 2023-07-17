import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';


const config = defineConfig({
    projectId: '6g7jati6',
    dataset: 'production',
    title: 'My Blog',
    apiVersion: '2023-07-16',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {types: schemas}

})

export default config;
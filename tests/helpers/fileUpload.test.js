import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'react-udemy-cyberpunkangel',
    api_key: '853371913167448',
    api_secret: 'xhYkrALOJ0P7Y2565lnnE59Uc5Q',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');
        console.log('Aquí el url de la prueba 1')
        console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
           resource_type: 'image'
        });
        console.log('Aquí la respuesta')
        console.log({ cloudResp })

    });

    test('debe de retornar null', async() => {
        
        console.log('Aquí el url de la prueba 2')
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
        
    });


    
});
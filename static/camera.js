Webcam.set({
            width:350,
            height:350,
            image_format:'jpeg',
            jpeg_quality:90
        })
Webcam.attach(#camera)
        
    
function take_snapshop(){
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('results').innerHTML ='<img src="'+data_uri+'"/>';
    });
}
    
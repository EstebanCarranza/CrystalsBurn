
function composer(id)
{
    //COMPOSER
    composerPlayer[id] = new THREE.EffectComposer(jugador[id].viewport.render);

    var renderPass = new THREE.RenderPass(scene, jugador[id].camPlayer);
    composerPlayer.addPass(renderPass);


    var sepiaPass = new THREE.ShaderPass(THREE.SepiaShader);
    sepiaPass.renderToScreen = true;
    composerPlayer.addPass(sepiaPass);

}
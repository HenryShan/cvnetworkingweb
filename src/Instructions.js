function instr() {
    return (
        <div>
            <div>
                <p style={{fontSize:24}}> The link to the annotator is at the lower right corner, please open it and login, and you will see your dataset.</p>
                <p style={{fontSize:24}}> For full instructions on how to use the COCO Annotator, please check out the video below! </p>
                <p style={{fontFamily: 'Share Tech', fontSize:36}}> Thank you for contributing to CVNetworking Project! </p>
                <div style={{
                    position: "relative",
                    paddingBottom: "40%",
                    height: 0
                }}>
                    <iframe
                        style={{
                            position: "absolute",
                            width: "70%",
                            left:"15%",
                            height: "100%"
                        }}
                        src='https://www.youtube.com/embed/OMJRcjnMMok?start=176'
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default instr;
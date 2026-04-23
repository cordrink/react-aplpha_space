export const WebbTelescopeSummary = () => {
    const nasaWebbYoutubeVideo = "https://www.youtube.com/embed/1C_zuHf6lP4?autoplay=1&mute=1&loop=1&playlist=1C_zuHf6lP4";
    return (
        <div>
            <iframe
                src={nasaWebbYoutubeVideo}
                height="100%"
                width="100%"
                allow={"autoplay"}
                className={"min-h-[500px]"}
                sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
            ></iframe>
        </div>
    );
};


const background = document.getElementsByClassName("music-background");
const coverPhoto = document.getElementsByClassName("music-cover-photo");
const musicInfoContainer = document.getElementsByClassName("music-info-container");
const musicCoverFrame = document.getElementsByClassName("music-cover-frame");
const controlsContainer = document.getElementsByClassName("controls-container");
const leftSlider = document.getElementsByClassName("controls-section-divider");
const rightSlider = document.getElementsByClassName("right-controls-section-divider");
const menuText = document.getElementsByClassName("menu-control-bottom");
const playpauseButton = document.getElementsByClassName("pause-button");
const prevSongButton = document.getElementsByClassName("previous-song-button");
const nextSongButton = document.getElementsByClassName("next-song-button");
const decoration = document.getElementsByClassName("decoration");
const previousControlTop = document.getElementsByClassName("previous-control-top");
const nextControlTop = document.getElementsByClassName("next-control-top");

const songs = [

    // Summer Songs
    {
        season: "summer",
        background: "./music_backgrounds/summer_bg.png",
        music_cover: "./music_cover_photos/summer1.png",
        name: "Ballads at Sunset",
        artist: "Alej - ",
        audio: "./songs/Alej - Ballads at Sunset (Piano Version).mp3",
        previous_button: "./icons/summer_pack/s_previous_button.png",
        next_button: "./icons/summer_pack/s_next_button.png",
        play_button: "./icons/summer_pack/s_play_button.png",
        pause_button: "./icons/summer_pack/s_pause_button.png",
        decoration: "./icons/summer_pack/s_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 248, 222) 0%, rgb(248, 242, 224) 18%, rgb(235, 232, 225) 38%, rgb(220, 219, 224) 65%, rgb(207, 208, 220) 100%)",
        music_info_text_color: "rgb(126, 170, 239)",
        music_info_border_color: "rgb(251, 220, 78)",
        music_cover_border_color: "rgb(251, 220, 78)",
        controls_container_border_color: "rgb(251, 220, 78)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(255, 247, 218) 0%, rgb(247, 239, 219) 22%, rgb(226, 223, 226) 42%, rgb(199, 204, 229) 68%, rgb(173, 184, 226) 100%)",
        menu_text_color: "rgb(250, 234, 177)",
        menu_webkit_stroke: "1px rgb(255, 219, 124)"
    },

    {
        season: "summer",
        background: "./music_backgrounds/summer_bg.png",
        music_cover: "./music_cover_photos/summer2.png",
        name: "Just Give Me One More Day",
        artist: "Alej - ",
        audio: "./songs/Alej - Just Give Me One More Day (Old Piano).mp3",
        previous_button: "./icons/summer_pack/s_previous_button.png",
        next_button: "./icons/summer_pack/s_next_button.png",
        play_button: "./icons/summer_pack/s_play_button.png",
        pause_button: "./icons/summer_pack/s_pause_button.png",
        decoration: "./icons/summer_pack/s_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 248, 222) 0%, rgb(248, 242, 224) 18%, rgb(235, 232, 225) 38%, rgb(220, 219, 224) 65%, rgb(207, 208, 220) 100%)",
        music_info_text_color: "rgb(126, 170, 239)",
        music_info_border_color: "rgb(251, 220, 78)",
        music_cover_border_color: "rgb(251, 220, 78)",
        controls_container_border_color: "rgb(251, 220, 78)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(255, 247, 218) 0%, rgb(247, 239, 219) 22%, rgb(226, 223, 226) 42%, rgb(199, 204, 229) 68%, rgb(173, 184, 226) 100%)",
        menu_text_color: "rgb(250, 234, 177)",
        menu_webkit_stroke: "1px rgb(255, 219, 124)"
    },

    {
        season: "summer",
        background: "./music_backgrounds/summer_bg.png",
        music_cover: "./music_cover_photos/summer3.png",
        name: "Golden Hour",
        artist: "Jvke - ",
        audio: "./songs/Jvke - Golden Hour.mp3",
        previous_button: "./icons/summer_pack/s_previous_button.png",
        next_button: "./icons/summer_pack/s_next_button.png",
        play_button: "./icons/summer_pack/s_play_button.png",
        pause_button: "./icons/summer_pack/s_pause_button.png",
        decoration: "./icons/summer_pack/s_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(255, 247, 218) 0%, rgb(235, 231, 222) 35%, rgb(200, 207, 232) 72%, rgb(166, 178, 225) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 248, 222) 0%, rgb(248, 242, 224) 18%, rgb(235, 232, 225) 38%, rgb(220, 219, 224) 65%, rgb(207, 208, 220) 100%)",
        music_info_text_color: "rgb(126, 170, 239)",
        music_info_border_color: "rgb(251, 220, 78)",
        music_cover_border_color: "rgb(251, 220, 78)",
        controls_container_border_color: "rgb(251, 220, 78)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(255, 247, 218) 0%, rgb(247, 239, 219) 22%, rgb(226, 223, 226) 42%, rgb(199, 204, 229) 68%, rgb(173, 184, 226) 100%)",
        menu_text_color: "rgb(250, 234, 177)",
        menu_webkit_stroke: "1px rgb(255, 219, 124)"
    },

    // Autumn Songs

    {
        season: "autumn",
        background: "./music_backgrounds/autumn_bg.png",
        music_cover: "./music_cover_photos/autumn1.png",
        name: "Day Dream",
        artist: "Nowt - ",
        audio: "./songs/Nowt - daydream.mp3",
        previous_button: "./icons/autumn_pack/au_previous_button.png",
        next_button: "./icons/autumn_pack/au_next_button.png",
        play_button: "./icons/autumn_pack/au_play_button.png",
        pause_button: "./icons/autumn_pack/au_pause_button.png",
        decoration: "./icons/autumn_pack/au_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 248, 222) 0%, rgb(239, 194, 153) 45%, rgb(219, 91, 27) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(219, 91, 27) 0%, rgb(239, 194, 153) 55%, rgb(255, 248, 222) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 252, 225) 0%, rgb(255, 247, 205) 18%, rgb(254, 235, 162) 38%, rgb(250, 217, 112) 65%, rgb(245, 190, 63) 100%)",
        music_info_text_color: "rgba(243, 87, 3, 0.89)",
        music_info_border_color: "rgba(251, 246, 246, 0.84)",
        music_cover_border_color: "rgba(251, 246, 246, 0.84)",
        controls_container_border_color: "rgb(251, 246, 246)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(247, 241, 207) 0%, rgb(244, 225, 169) 36%, rgb(255, 223, 153) 70%, rgb(250, 208, 140) 100%)",
        menu_text_color: "rgb(255, 255, 255)",
        menu_webkit_stroke: "1px rgb(255, 255, 255)"
    },

    {
        season: "autumn",
        background: "./music_backgrounds/autumn_bg.png",
        music_cover: "./music_cover_photos/autumn2.png",
        name: "Cordelia",
        artist: "Juan Arenosa - ",
        audio: "./songs/Juan Arenosa - Cordelia.mp3",
        previous_button: "./icons/autumn_pack/au_previous_button.png",
        next_button: "./icons/autumn_pack/au_next_button.png",
        play_button: "./icons/autumn_pack/au_play_button.png",
        pause_button: "./icons/autumn_pack/au_pause_button.png",
        decoration: "./icons/autumn_pack/au_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 248, 222) 0%, rgb(239, 194, 153) 45%, rgb(219, 91, 27) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(219, 91, 27) 0%, rgb(239, 194, 153) 55%, rgb(255, 248, 222) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 252, 225) 0%, rgb(255, 247, 205) 18%, rgb(254, 235, 162) 38%, rgb(250, 217, 112) 65%, rgb(245, 190, 63) 100%)",
        music_info_text_color: "rgba(243, 87, 3, 0.89)",
        music_info_border_color: "rgba(251, 246, 246, 0.84)",
        music_cover_border_color: "rgba(251, 246, 246, 0.84)",
        controls_container_border_color: "rgb(251, 246, 246)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(247, 241, 207) 0%, rgb(244, 225, 169) 36%, rgb(255, 223, 153) 70%, rgb(250, 208, 140) 100%)",
        menu_text_color: "rgb(255, 255, 255)",
        menu_webkit_stroke: "1px rgb(255, 255, 255)"
    },

    {
        season: "autumn",
        background: "./music_backgrounds/autumn_bg.png",
        music_cover: "./music_cover_photos/autumn3.png",
        name: "Flashing Memories",
        artist: "Juan Arenosa - ",
        audio: "./songs/Juan Arenosa - Flashing Memories.mp3",
        previous_button: "./icons/autumn_pack/au_previous_button.png",
        next_button: "./icons/autumn_pack/au_next_button.png",
        play_button: "./icons/autumn_pack/au_play_button.png",
        pause_button: "./icons/autumn_pack/au_pause_button.png",
        decoration: "./icons/autumn_pack/au_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(255, 248, 222) 0%, rgb(239, 194, 153) 45%, rgb(219, 91, 27) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(219, 91, 27) 0%, rgb(239, 194, 153) 55%, rgb(255, 248, 222) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(255, 252, 225) 0%, rgb(255, 247, 205) 18%, rgb(254, 235, 162) 38%, rgb(250, 217, 112) 65%, rgb(245, 190, 63) 100%)",
        music_info_text_color: "rgba(243, 87, 3, 0.89)",
        music_info_border_color: "rgba(251, 246, 246, 0.84)",
        music_cover_border_color: "rgba(251, 246, 246, 0.84)",
        controls_container_border_color: "rgb(251, 246, 246)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(247, 241, 207) 0%, rgb(244, 225, 169) 36%, rgb(255, 223, 153) 70%, rgb(250, 208, 140) 100%)",
        menu_text_color: "rgb(255, 255, 255)",
        menu_webkit_stroke: "1px rgb(255, 255, 255)"
    },

    // Spring Songs 
    {
        season: "spring",
        background: "./music_backgrounds/spring_bg.png",
        music_cover: "./music_cover_photos/spring1.png",
        name: "Rumination",
        artist: "BAANDIT - ",
        audio: "./songs/BAANDIT - rumination.mp3",
        previous_button: "./icons/spring_pack/sp_previous_button.png",
        next_button: "./icons/spring_pack/sp_next_button.png",
        play_button: "./icons/spring_pack/sp_play_button.png",
        pause_button: "./icons/spring_pack/sp_pause_button.png",
        decoration: "./icons/spring_pack/sp_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(247, 224, 235) 0%, rgb(207, 199, 226) 42%, rgb(137, 151, 198) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(137, 151, 198) 0%, rgb(207, 199, 226) 58%, rgb(247, 224, 235) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(247, 228, 237) 0%, rgb(244, 221, 234) 18%, rgb(238, 211, 230) 38%, rgb(229, 216, 238) 65%, rgb(219, 214, 236) 100%)",
        music_info_text_color: "rgba(137, 141, 183, 0.86)",
        music_info_border_color: "rgb(196, 192, 227)",
        music_cover_border_color: "rgba(254, 230, 255, 0.84)",
        controls_container_border_color: "rgb(196, 192, 227)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(146, 156, 202) 0%, rgb(152, 164, 210) 22%, rgb(159, 171, 216) 42%, rgb(148, 163, 208) 68%, rgb(136, 151, 196) 100%)",
        menu_text_color: "rgb(216, 213, 241)",
        menu_webkit_stroke: "1px rgb(190, 193, 229)"
    },

    {
        season: "spring",
        background: "./music_backgrounds/spring_bg.png",
        music_cover: "./music_cover_photos/spring2.png",
        name: "Dearly Beloved",
        artist: "Yoko Shimomura - ",
        audio: "./songs/Yoko Shimomura - Dearly Beloved.mp3",
        previous_button: "./icons/spring_pack/sp_previous_button.png",
        next_button: "./icons/spring_pack/sp_next_button.png",
        play_button: "./icons/spring_pack/sp_play_button.png",
        pause_button: "./icons/spring_pack/sp_pause_button.png",
        decoration: "./icons/spring_pack/sp_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(247, 224, 235) 0%, rgb(207, 199, 226) 42%, rgb(137, 151, 198) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(137, 151, 198) 0%, rgb(207, 199, 226) 58%, rgb(247, 224, 235) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(247, 228, 237) 0%, rgb(244, 221, 234) 18%, rgb(238, 211, 230) 38%, rgb(229, 216, 238) 65%, rgb(219, 214, 236) 100%)",
        music_info_text_color: "rgba(137, 141, 183, 0.86)",
        music_info_border_color: "rgb(196, 192, 227)",
        music_cover_border_color: "rgba(254, 230, 255, 0.84)",
        controls_container_border_color: "rgb(196, 192, 227)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(146, 156, 202) 0%, rgb(152, 164, 210) 22%, rgb(159, 171, 216) 42%, rgb(148, 163, 208) 68%, rgb(136, 151, 196) 100%)",
        menu_text_color: "rgb(216, 213, 241)",
        menu_webkit_stroke: "1px rgb(190, 193, 229)"
    },

    {
        season: "spring",
        background: "./music_backgrounds/spring_bg.png",
        music_cover: "./music_cover_photos/spring3.png",
        name: "Ethereal",
        artist: "Txmy - ",
        audio: "./songs/Txmy - Ethereal.mp3",
        previous_button: "./icons/spring_pack/sp_previous_button.png",
        next_button: "./icons/spring_pack/sp_next_button.png",
        play_button: "./icons/spring_pack/sp_play_button.png",
        pause_button: "./icons/spring_pack/sp_pause_button.png",
        decoration: "./icons/spring_pack/sp_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(247, 224, 235) 0%, rgb(207, 199, 226) 42%, rgb(137, 151, 198) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(137, 151, 198) 0%, rgb(207, 199, 226) 58%, rgb(247, 224, 235) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(247, 228, 237) 0%, rgb(244, 221, 234) 18%, rgb(238, 211, 230) 38%, rgb(229, 216, 238) 65%, rgb(219, 214, 236) 100%)",
        music_info_text_color: "rgba(137, 141, 183, 0.86)",
        music_info_border_color: "rgb(196, 192, 227)",
        music_cover_border_color: "rgba(254, 230, 255, 0.84)",
        controls_container_border_color: "rgb(196, 192, 227)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(146, 156, 202) 0%, rgb(152, 164, 210) 22%, rgb(159, 171, 216) 42%, rgb(148, 163, 208) 68%, rgb(136, 151, 196) 100%)",
        menu_text_color: "rgb(216, 213, 241)",
        menu_webkit_stroke: "1px rgb(190, 193, 229)"
    },

        {
        season: "spring",
        background: "./music_backgrounds/spring_bg.png",
        music_cover: "./music_cover_photos/spring4.png",
        name: "If I am With You",
        artist: "照井順政 - ",
        audio: "./songs/照井順政- If I am With You.mp3",
        previous_button: "./icons/spring_pack/sp_previous_button.png",
        next_button: "./icons/spring_pack/sp_next_button.png",
        play_button: "./icons/spring_pack/sp_play_button.png",
        pause_button: "./icons/spring_pack/sp_pause_button.png",
        decoration: "./icons/spring_pack/sp_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(247, 224, 235) 0%, rgb(207, 199, 226) 42%, rgb(137, 151, 198) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(137, 151, 198) 0%, rgb(207, 199, 226) 58%, rgb(247, 224, 235) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgb(247, 228, 237) 0%, rgb(244, 221, 234) 18%, rgb(238, 211, 230) 38%, rgb(229, 216, 238) 65%, rgb(219, 214, 236) 100%)",
        music_info_text_color: "rgba(137, 141, 183, 0.86)",
        music_info_border_color: "rgb(196, 192, 227)",
        music_cover_border_color: "rgba(254, 230, 255, 0.84)",
        controls_container_border_color: "rgb(196, 192, 227)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(146, 156, 202) 0%, rgb(152, 164, 210) 22%, rgb(159, 171, 216) 42%, rgb(148, 163, 208) 68%, rgb(136, 151, 196) 100%)",
        menu_text_color: "rgb(216, 213, 241)",
        menu_webkit_stroke: "1px rgb(190, 193, 229)"
    },

    // Winter 
    {
        season: "winter",
        background: "./music_backgrounds/winter_bg.png",
        music_cover: "./music_cover_photos/winter1.png",
        name: "mv3",
        artist: "Auror - ",
        audio: "./songs/Auror - mv3.mp3",
        previous_button: "./icons/winter_pack/w_previous_button.png",
        next_button: "./icons/winter_pack/w_next_button.png",
        play_button: "./icons/winter_pack/w_play_button.png",
        pause_button: "./icons/winter_pack/w_pause_button.png",
        decoration: "./icons/winter_pack/w_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(229, 244, 250) 0%, rgb(166, 205, 226) 42%, rgb(71, 138, 187) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(71, 138, 187) 0%, rgb(166, 205, 226) 58%, rgb(229, 244, 250) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgba(202, 225, 241, 0.92) 0%, rgba(119, 171, 213, 0.96) 45%, rgba(77, 133, 184, 0.88) 80%, rgba(255, 255, 255, 0.6) 100%)",
        music_info_text_color: "rgb(248, 241, 241)",
        music_info_border_color: "rgb(127, 182, 234)",
        music_cover_border_color: "hsl(0, 0%, 100%)",
        controls_container_border_color: "rgb(127, 182, 234)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(129, 182, 224) 0%, rgb(154, 199, 231) 28%, rgb(181, 216, 239) 58%, rgb(218, 238, 248) 100%)",
        menu_text_color: "rgb(142, 197, 248)",
    },

    {
        season: "winter",
        background: "./music_backgrounds/winter_bg.png",
        music_cover: "./music_cover_photos/winter2.png",
        name: "Solas",
        artist: "Jamie Duffy - ",
        audio: "./songs/Jamie Duffy - Solas.mp3",
        previous_button: "./icons/winter_pack/w_previous_button.png",
        next_button: "./icons/winter_pack/w_next_button.png",
        play_button: "./icons/winter_pack/w_play_button.png",
        pause_button: "./icons/winter_pack/w_pause_button.png",
        decoration: "./icons/winter_pack/w_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(229, 244, 250) 0%, rgb(166, 205, 226) 42%, rgb(71, 138, 187) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(71, 138, 187) 0%, rgb(166, 205, 226) 58%, rgb(229, 244, 250) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgba(202, 225, 241, 0.92) 0%, rgba(119, 171, 213, 0.96) 45%, rgba(77, 133, 184, 0.88) 80%, rgba(255, 255, 255, 0.6) 100%)",
        music_info_text_color: "rgb(248, 241, 241)",
        music_info_border_color: "rgb(127, 182, 234)",
        music_cover_border_color: "hsl(0, 0%, 100%)",
        controls_container_border_color: "rgb(127, 182, 234)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(129, 182, 224) 0%, rgb(154, 199, 231) 28%, rgb(181, 216, 239) 58%, rgb(218, 238, 248) 100%)",
        menu_text_color: "rgb(142, 197, 248)",
    },

    {
        season: "winter",
        background: "./music_backgrounds/winter_bg.png",
        music_cover: "./music_cover_photos/winter3.png",
        name: "Starry Night",
        artist: "Jordan Critz - ",
        audio: "./songs/Jordan Critz - Starry Night.mp3",
        previous_button: "./icons/winter_pack/w_previous_button.png",
        next_button: "./icons/winter_pack/w_next_button.png",
        play_button: "./icons/winter_pack/w_play_button.png",
        pause_button: "./icons/winter_pack/w_pause_button.png",
        decoration: "./icons/winter_pack/w_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(229, 244, 250) 0%, rgb(166, 205, 226) 42%, rgb(71, 138, 187) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(71, 138, 187) 0%, rgb(166, 205, 226) 58%, rgb(229, 244, 250) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgba(202, 225, 241, 0.92) 0%, rgba(119, 171, 213, 0.96) 45%, rgba(77, 133, 184, 0.88) 80%, rgba(255, 255, 255, 0.6) 100%)",
        music_info_text_color: "rgb(248, 241, 241)",
        music_info_border_color: "rgb(127, 182, 234)",
        music_cover_border_color: "hsl(0, 0%, 100%)",
        controls_container_border_color: "rgb(127, 182, 234)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(129, 182, 224) 0%, rgb(154, 199, 231) 28%, rgb(181, 216, 239) 58%, rgb(218, 238, 248) 100%)",
        menu_text_color: "rgb(142, 197, 248)",
    },

    {
        season: "winter",
        background: "./music_backgrounds/winter_bg.png",
        music_cover: "./music_cover_photos/winter4.png",
        name: "Dreaming of the Stars",
        artist: "Alej - ",
        audio: "./songs/Alej - Dreaming of the Stars.mp3",
        previous_button: "./icons/winter_pack/w_previous_button.png",
        next_button: "./icons/winter_pack/w_next_button.png",
        play_button: "./icons/winter_pack/w_play_button.png",
        pause_button: "./icons/winter_pack/w_pause_button.png",
        decoration: "./icons/winter_pack/w_deco.png",
        left_slider_color: "linear-gradient(to right, rgb(229, 244, 250) 0%, rgb(166, 205, 226) 42%, rgb(71, 138, 187) 100%)",
        right_slider_color: "linear-gradient(to right, rgb(71, 138, 187) 0%, rgb(166, 205, 226) 58%, rgb(229, 244, 250) 100%)",
        music_info_container_gradient_color: "linear-gradient(to bottom, rgba(202, 225, 241, 0.92) 0%, rgba(119, 171, 213, 0.96) 45%, rgba(77, 133, 184, 0.88) 80%, rgba(255, 255, 255, 0.6) 100%)",
        music_info_text_color: "rgb(248, 241, 241)",
        music_info_border_color: "rgb(127, 182, 234)",
        music_cover_border_color: "hsl(0, 0%, 100%)",
        controls_container_border_color: "rgb(127, 182, 234)",
        controls_container_gradient_color: "linear-gradient(to bottom, rgb(129, 182, 224) 0%, rgb(154, 199, 231) 28%, rgb(181, 216, 239) 58%, rgb(218, 238, 248) 100%)",
        menu_text_color: "rgb(142, 197, 248)",
    },

];

const mainContainer = document.querySelector("#main-container");
const playPauseControl = document.querySelector("#play-pause-control");
const playbackStatus = document.querySelector("#playback-status");
const playlistDialog = document.querySelector("#playlist-dialog");
const playlist = document.querySelector("#playlist");
const audio = document.createElement("audio");
audio.preload = "metadata";

let currentSongIndex = 0;
let isPlaybackRequested = false;
let playbackRequestId = 0;

function setPlayButtonState(isPlaying) {
    const song = songs[currentSongIndex];
    playpauseButton[0].src = isPlaying ? song.pause_button : song.play_button;
    playpauseButton[0].dataset.buttonState = isPlaying ? "pause" : "play";
    playPauseControl.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
}

async function playCurrentSong() {
    isPlaybackRequested = true;
    const requestId = ++playbackRequestId;
    playbackStatus.textContent = "";
    setPlayButtonState(true);
    if (audio.error) audio.load();

    try {
        await audio.play();
        if (requestId === playbackRequestId) {
            setPlayButtonState(!audio.paused);
        }
    } catch (error) {
        // A previous track's rejected promise must not reset the current controls.
        if (requestId !== playbackRequestId) return;
        isPlaybackRequested = false;
        setPlayButtonState(false);
        playbackStatus.textContent = error.name === "NotAllowedError"
            ? "Playback was blocked by your browser. Press Play to try again."
            : "This song could not be played. Try Play again or choose another song from Menu.";
    }
}

function loadSong(continuePlaying = isPlaybackRequested) {
    const song = songs[currentSongIndex];
    ++playbackRequestId;
    isPlaybackRequested = false;
    audio.pause();
    playbackStatus.textContent = "";

    mainContainer.dataset.season = song.season;
    document.body.dataset.season = song.season;
    background[0].src = song.background;
    coverPhoto[0].src = song.music_cover;
    coverPhoto[0].alt = `Cover artwork for ${song.name}`;

    musicInfoContainer[0].textContent = `${song.artist}${song.name}`;
    musicInfoContainer[0].style.background = song.music_info_container_gradient_color;
    musicInfoContainer[0].style.color = song.music_info_text_color;
    musicInfoContainer[0].style.borderColor = song.music_info_border_color;
    musicCoverFrame[0].style.borderColor = song.music_cover_border_color;
    controlsContainer[0].style.background = song.controls_container_gradient_color;
    controlsContainer[0].style.borderColor = song.controls_container_border_color;
    leftSlider[0].style.background = song.left_slider_color;
    rightSlider[0].style.background = song.right_slider_color;
    menuText[0].style.color = song.menu_text_color;
    menuText[0].style.webkitTextStroke = song.menu_webkit_stroke || "0 transparent";
    prevSongButton[0].src = song.previous_button;
    nextSongButton[0].src = song.next_button;
    decoration[0].src = song.decoration;
    setPlayButtonState(false);

    for (const [index, button] of [...playlist.querySelectorAll("button")].entries()) {
        if (index === currentSongIndex) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
    }

    audio.src = song.audio;
    audio.load();
    if (continuePlaying) playCurrentSong();
}

function showPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
}

function showNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
}

function buildPlaylist() {
    for (const [index, song] of songs.entries()) {
        const item = document.createElement("li");
        const button = document.createElement("button");
        const season = document.createElement("span");
        button.type = "button";
        button.append(`${song.artist}${song.name}`);
        season.className = "playlist-season";
        season.textContent = song.season;
        button.append(season);
        button.addEventListener("click", () => {
            if (index !== currentSongIndex) {
                currentSongIndex = index;
                loadSong();
            }
            playlistDialog.close();
        });
        item.append(button);
        playlist.append(item);
    }
}

if (mainContainer && songs.length > 0) {
    buildPlaylist();
    loadSong();
    previousControlTop[0].addEventListener("click", showPreviousSong);
    nextControlTop[0].addEventListener("click", showNextSong);
    playPauseControl.addEventListener("click", () => {
        if (isPlaybackRequested) {
            ++playbackRequestId;
            isPlaybackRequested = false;
            audio.pause();
            setPlayButtonState(false);
        } else {
            playCurrentSong();
        }
    });

    menuText[0].addEventListener("click", () => {
        playlistDialog.showModal();
        const currentButton = playlist.querySelector('[aria-current="true"]');
        currentButton.focus({ preventScroll: true });
        currentButton.scrollIntoView({ block: "nearest" });
    });

    audio.addEventListener("play", () => setPlayButtonState(!audio.paused));
    audio.addEventListener("pause", () => {
        if (!isPlaybackRequested) setPlayButtonState(false);
    });
    audio.addEventListener("error", () => {
        ++playbackRequestId;
        isPlaybackRequested = false;
        setPlayButtonState(false);
        playbackStatus.textContent = "This song could not be loaded. Choose another song from Menu or try Play again.";
    });
    audio.addEventListener("ended", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(true);
    });
}

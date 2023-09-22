import React, { useState, useRef, useEffect } from "react";
import "./playing.css";
import songs from './songs.js'
import { FaPlay, FaPause } from "react-icons/fa";
import { IoArrowUndoOutline , IoArrowRedoOutline } from "react-icons/io5";
import { GiMusicalScore } from "react-icons/gi";

const Playing = ({ songs, currentSongIndex }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progress = useRef();
  const animRef = useRef();

  useEffect(() => {
    const sec = Math.floor(audioPlayer.current?.duration);
    setDuration(sec);
    progress.current.max = sec;

  }, [audioPlayer.current?.duration]);



  const calcTime = (sec) => {
    const min = Math.floor(sec / 60);
    const returnedMin = min < 10 ? `0${min}` : `${min}`;
    const seconds = Math.floor(sec % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMin} : ${returnedSeconds}`;
  };

  const PlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!isPlaying);
    if (prevValue) {
      audioPlayer.current.play();
      animRef.current = requestAnimationFrame(whilePlayin);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animRef.current);
    }
  };

  const whilePlayin = () => {
    progress.current.value = audioPlayer.current.currentTime;
    PlayerWorkProgress();
    animRef.current = requestAnimationFrame(whilePlayin);
  }

  const changeRange = () =>{
    audioPlayer.current.currentTime = progress.current.value;
    PlayerWorkProgress();
  }

  const PlayerWorkProgress = () =>{
    progress.current.style.setProperty('--seek-before-width', `${progress.current.value/duration * 100}%`)
    setCurrentTime(progress.current.value);
  }

  const bwd = () =>{
    progress.current.value = Number(progress.current.value - 10);
    changeRange();
  }

  const fwd = () =>{
    progress.current.value = Number(progress.current.value + 1);
    changeRange();
  }


  const gana = songs[currentSongIndex];
  const imageHtml = <img src={gana.albumArt} alt={gana.title} />;
  const titleHtml = <h2>{gana.title}</h2>;
  const titlp = <p>{gana.title}</p>;
  const singerHtml = <p>Singer: {gana.singer}</p>;
  const albumHtml = <p>Album: {gana.album}</p>;
  const audioPlayerHtml = <audio src={gana.song} preload="metadata" ref={audioPlayer} />;

  return (
<div className="Container">

  <h2 className="rtal"><GiMusicalScore /> Now Playing...</h2>

  


  {/* <img src="https://github.com/LakshyaMalik/assets_lakki/blob/main/Death%20Note.jpg?raw=true" alt="Deathnote" /> */}
  {imageHtml}
  <div className="desc">
    {/* <h2>Death Note Intro</h2> */}
    {titleHtml}
    <div>
      {/* <p>Singer: Lorem</p>
      <p>Album: Death Note</p> */}
      {singerHtml}
      {albumHtml}
    </div>
  </div>

  {audioPlayerHtml}
    {/* <audio
      src="https://firebasestorage.googleapis.com/v0/b/musics-lakki.appspot.com/o/Death%20Note%20!%20Light%20Yagami%20bgm.mp3?alt=media&token=b44d9903-5009-4e73-88c1-7991748caade"
      preload="metadata"
      ref={audioPlayer}
      /> */}
  <div className="audio-player">

    <div className="controls">
      <button className="audio-back" onClick={bwd}><IoArrowUndoOutline/></button>
      <button className="audio-play-pause" onClick={PlayPause}>
        {isPlaying ? <FaPlay /> : <FaPause />}
      </button>
      <button className="audio-forward" onClick={fwd}><IoArrowRedoOutline/></button>
    </div>

    <div className="mtr">
    <div className="time-container">
    <div className="currentTime">{calcTime(currentTime)}</div>
  </div>
  <input type="range" className="progress" defaultValue="0" ref={progress} onChange={changeRange} />
  <div className="time-container">
    <div className="duration">{duration && Number.isFinite(duration) && calcTime(duration)}</div>
  </div>
</div>

  </div>

</div>

  )};

export default Playing;

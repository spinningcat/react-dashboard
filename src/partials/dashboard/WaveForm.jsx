import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

function Waveform() {
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      barWidth: 3,
      cursorWidth: 3,
      barHeight: 1,
      waveColor: "#ff7588",
      progressColor: "#ff4961",
      height: 80,
      splitChannels: true,
      cursorColor: "#000",
    });
    wavesurfer.load("//cf.harvestmedia.net/assets/samples/d8d823803903151ef3fc02510e02577d232299d3/084d4dd9bf61f26f");

    // Handle resizing
    const handleResize = () => {
      // Your resizing logic here
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const playPause = () => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
    });
    if (wavesurfer) {
      if (isPlaying) {
        wavesurfer.pause();
      } else {
        wavesurfer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    const value = parseFloat(event.target.value);
    setVolume(value);
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
    });
    wavesurfer.setVolume(value);
  };

  const handleRateChange = (event) => {
    const value = parseFloat(event.target.value);
    setPlaybackRate(value);
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
    });
    wavesurfer.setPlaybackRate(value);
  };

  return (
    <div className="waveformDiv">
      <div className="col-12" id="waveform_buttonset" style={{ backgroundColor: '#ff4961' }}>
        <div className="realtimecounter">&nbsp;</div>
        <a id="player_back_btn"><i className="la la-fast-backward" style={{ color: '#fff', fontSize: '24px', marginTop: '4px' }}></i></a>
        <a id="player_play_btn" className="play_btn_c" onClick={playPause}>
          <i className={isPlaying ? 'la la-pause' : 'la la-play'} style={{ color: '#fff', fontSize: '24px', marginTop: '4px' }}></i>
        </a>
        <a><i className="la la-fast-forward" style={{ color: '#fff', fontSize: '24px', marginTop: '4px' }}></i></a>
        <span style={{ marginLeft: '20px', marginRight: '4px', color: '#fff' }}><i className="la la-volume-down player-volume-viewer" aria-hidden="true"></i></span>
        <input id="player-volume-range" type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} style={{ margin: '-2px 0px' }} />
        <label className="realtimecti"></label>
        <select name="rate" style={{ height: '28px', position: 'relative' }} value={playbackRate} onChange={handleRateChange}>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.50">1.50</option>
          <option value="1.75">1.75</option>
          <option value="2">2</option>
        </select>
        <a id="bottom_fixed_close" style={{ float: 'right', color: '#fff !important', marginTop: '4px' }}><i className="ft-x"></i></a>
        <a id="bottom_fixed_button" style={{ float: 'right', color: '#fff !important', marginTop: '4px' }}><i className="ft-minus"></i></a>
      </div>
      <div id="waveform" ref={waveformRef}></div>
      <div style={{ textAlign: 'center' }}>
        
      
      </div>
    </div>
  );
}

export default Waveform;

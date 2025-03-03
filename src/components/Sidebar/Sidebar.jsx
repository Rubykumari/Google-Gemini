import React, { useState } from 'react'
import './Sidebar.scss'
import { assets } from '../../assets/assets'
export const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <div className='sidebar'>
            <div className="top">
                <img src={assets.menu_icon} alt="" className='menu' onClick={() => setExtended(!extended)} />
                <div className="newChat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recenTitle">Recent</p>
                        <div className="recentEntry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div> : null
                }

            </div>
            <div className="sidebarBottom">
                <div className="bottomItem recentEntry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p>:null}
                    
                </div>
                <div className="bottomItem recentEntry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottomItem recentEntry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

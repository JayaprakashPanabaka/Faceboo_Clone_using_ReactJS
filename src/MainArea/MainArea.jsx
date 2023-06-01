import './MainArea.css';
import {FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaMedrt, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaShareSquare} from 'react-icons/fa';
import {MdMoreHoriz, MdVideoCall} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai'

function MainArea() {
    return (
        <div className='Main'>
            <div className='Rside'>
                <div className='Profile'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvmW8z7IbGHQOEOhlO4UA9GzKlVm6EDU3XA&usqp=CAU' alt='Profile=pic' 
                    style={{height:"50px", padding:"1rem"}} 
                    />
                    Jayaprakash
                </div>
                <div className='Pro'>
                    <FaFontAwesomeFlag color="green" fontSize='1.4rem' /> 
                    <div>Pages</div>
                </div>

                <div className='Pro'>
                    <FaMedrt color="blue" fontSize='1.4rem' /> 
                    <div>COVID-19 Information </div>
                </div>

                <div className='Pro'>
                    <FaFacebookMessenger color="green" fontSize='1.4rem' /> 
                    <div>Messenger Kids</div>
                </div>

                <div className='Pro'>
                    <FaUserFriends color="blue" fontSize='1.4rem' /> 
                    <div>Friends</div>
                </div>

                <div className='Pros'>
                    <FaAngleDown color="green" fontSize='1.4rem' /> 
                    <div>See More</div>
                </div>

                <br/>

                <div className='Profiles'>
                    <img src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' alt='Profile=pic' 
                    style={{height:"50px", padding:"1rem"}} 
                    />
                    React Developer
                </div>

                <div className='Profiles'>
                    <img src='https://www.mindinventory.com/blog/wp-content/uploads/2022/10/mean-stack.png' alt='Profile=pic' 
                    style={{height:"50px", padding:"1rem"}} 
                    />
                    MEAN STACk
                </div>

                <div className='Profiles'>
                    <img src='https://static.javatpoint.com/images/javascript/javascript_logo.png' alt='Profile=pic' 
                    style={{height:"50px", padding:"1rem"}} 
                    />
                    JavaScript
                </div>

                <div className='Profiles'>
                    <img src='https://miro.medium.com/v2/resize:fit:1400/0*GKIyAWHbKbANm7d9.png' alt='Profile=pic' 
                    style={{height:"50px", padding:"1rem"}} 
                    />
                    MERN STACK
                </div>

                <div className='Pross'>
                    <FaAngleDown color='blue' fontSize="1rem" />
                    See More
                </div>

            </div>

            <div className='MainArea'>
                <div className='addStory'>
                    <div className='Story'>
                        <img src='https://4kwallpapers.com/images/wallpapers/avengers-endgame-marvel-superheroes-marvel-comics-5k-3840x2160-942.jpg' alt='IMG' 
                        style={{height:"50px", width:"50px", borderRadius:"50%"}} 
                        />
                        <br/> <br/> <br/> <br/> <br/> <br/> 
                        Avengers Family
                    </div>
                    <div className='Story'>
                        <img src='https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg' alt='IMG' 
                        style={{height:"50px", width:"50px", borderRadius:"50%"}} 
                        />
                        <br/> <br/> <br/> <br/> <br/> <br/> 
                        Spider Man
                    </div>
                    <div className='Story'>
                        <img src='https://www.mordeo.org/download/18069/' alt='IMG' 
                        style={{height:"50px", width:"50px", borderRadius:"50%"}} 
                        />
                        <br/> <br/> <br/> <br/> <br/> <br/> 
                        Thanos
                    </div>
                    <div className='Story'>
                        <img src='https://wallpapercave.com/wp/wp3883316.jpg' alt='IMG' 
                        style={{height:"50px", width:"50px", borderRadius:"50%"}} 
                        />
                        <br/> <br/> <br/> <br/> <br/> <br/> 
                        I'm Groot
                    </div>
                </div>
                <div className='message'>
                    <div className='text'>
                        <div className='Post'>
                            <img src='https://wallpapercave.com/wp/wp3883316.jpg' alt='PIC' />
                            <input type='Mind' placeholder="What's on your mind, JP?" />                            </div>
                            <div className='Call'>
                                <div className='ico'>
                                    <div className='icone'>
                                        <MdVideoCall fontSize="2rem" color="red" />
                                        <div>Live Video</div>
                                    </div> 
                                    <div className='icone'>
                                        <AiFillFileImage fontSize="2rem" color="green" />
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className='icone'>
                                        <FaGrin fontSize="2rem" color="orange" />
                                        <div>Felling/Activity</div>
                                    </div>
                                </div>
                            </div>
                            <div className='Posted'>
                                <div className='poster'>
                                    <div className='JP'>
                                        <img src='https://w0.peakpx.com/wallpaper/208/732/HD-wallpaper-black-panther-hero-marvel-movie-super-t-challa.jpg' alt='Img' 
                                        style={{height:"50px", width:"50px", borderRadius:"50%"}}
                                        />                                   
                                        <h1 className='heading'>JP</h1>
                                        <div className='update'> Update this cover image</div>
                                    </div>
                                    <div className='edit'><MdMoreHoriz fontSize="1.5rem"/></div>
                                </div>
                                <div className='caption' >
                                    Please Like, Comment and Subscribe to our YouTube Channel.
                                </div>
                                <br/>
                                <div className='FacebookImg'>
                                    <img src='https://i0.wp.com/ramenswag.com/wp-content/uploads/2019/01/Black-Panther-Hd-Wallpaper.jpg?fit=1920%2C1200&ssl=1' alt='dp' 
                                    style={{height:"auto", width:"100%"}}
                                    />
                                </div>
                                <div className='Comment'>
                                    <div className='Like'>
                                        <FaRegThumbsUp color="blue" /> Like
                                    </div>
                                    <div className='Like'>
                                        <FaCommentAlt color="blue" /> Comment
                                    </div>
                                    <div className='Like'>
                                        <FaShareSquare color="blue" /> Share
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                 
            </div>

            <div className='Lside'>
                <div className='Contact'>
                    <div className='Contacts'>
                        Contacts
                    </div>
                
                    <div className='chaticon'>
                        <div className='icons'>
                            <MdVideoCall fontSize='1.8rem' />
                        </div>
                        <div className='icons'>
                            <FaSearch fontSize='1.5rem' />
                        </div>
                        <div className='icons'>
                            <MdMoreHoriz fontSize='1.6rem' />
                        </div>
                    </div>
                </div>
            

                <div className='concise'>
                    <div className='Profilee'>
                        <img src='https://c4.wallpaperflare.com/wallpaper/138/492/965/3d-mark-vii-4k-iron-man-wallpaper-preview.jpg' alt='logo' 
                        style={{height:"35px", padding:"1rem"}}
                        />
                        Iron Man
                    </div>
                    <div className='Profilee'>
                        <img src='https://wallpaperaccess.com/full/119059.jpg' alt='logo' 
                        style={{height:"35px", padding:"1rem"}} 
                        />
                        Captain America
                    </div>
                    <div className='Profilee'>
                        <img src='https://w0.peakpx.com/wallpaper/644/697/HD-wallpaper-hulk-green-neon-lights-superheroes-marvel-comics-robert-bruce-banner-hulk-cartoon-hulk.jpg' alt='logo' 
                        style={{height:"35px", padding:"1rem"}} 
                        />
                        Hulk
                    </div>
                    <div className='Profilee'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiXeWACrGb8VBNjqT0qKU9HLuUeEHNxiOIw&usqp=CAU' alt='logo' 
                        style={{height:"35px", padding:"1rem"}} 
                        />
                        Thor
                    </div>
                    <div className='Profilee'>
                        <img src='https://www.wallpapers13.com/wp-content/uploads/2017/03/Scarlett-Johansson-Black-Widow-Avengers-Age-of-Ultron-movies-4K-Ultra-Hd-Wallpaper-3840x2160-1920x1440.jpg' alt='logo' 
                        style={{height:"35px", padding:"1rem"}} 
                        />
                        Black Widow
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea;
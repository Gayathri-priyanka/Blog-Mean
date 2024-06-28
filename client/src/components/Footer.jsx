import { Footer, FooterDivider } from "flowbite-react";
import {Link} from 'react-router-dom';
import{BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
            <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-purple-500 via-teal-400 to-cyan-500 rounded-lg text-white'>BlogHive</span>
            </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About' />
                <Footer.LinkGroup col>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                        100 JS Projects
                    </Footer.Link>
                    <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                        BlogPage
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://www.github.com/gayathri-priyanka' target='_blank' rel='noopener noreferrer'>
                        Github
                    </Footer.Link>
                    <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title='Legal' />
                <Footer.LinkGroup col>
                    <Footer.Link href='#' >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href='#' >
                        Terms &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Gayathri's blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsDribbble}/>
                <Footer.Icon href='https://github.com/gayathri-priyanka' icon={BsGithub}/>
            </div>
        </div>
      </div>
    </Footer>
  )
}

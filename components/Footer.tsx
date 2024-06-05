import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer relative z-10'>
      <article className='footer__links-container'>
        <div className='footer__rights'>
          <Image
            className='object-contain'
            src='/logo.svg'
            width={118}
            height={15}
            alt='car logo'
          />
          <p className='text-base text-grey-700'>
            Micbol Car-Hub {new Date().getFullYear()} <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => {
            return (
              <div className='footer__link' key={link.title}>
                <h4 className='font-semibold'>{link.title}</h4>
                {link.links.map((item) => (
                  <Link
                    className='text-grey-500'
                    href={item.url}
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )
          })}
        </div>
      </article>
      <div className='footer__copyrights'>
        <p className='max-w-60 lg:text-base text-sm'>
          @ {new Date().getFullYear()} Micbol Car-Hub. All rights reserved
        </p>
        <div className='footer__copyrights-link'>
          <Link href='/' className='text-grey-500 lg:text-base text-sm'>
            Privacy policy
          </Link>
          <Link href='/' className='text-grey-500 lg:text-base text-sm'>
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

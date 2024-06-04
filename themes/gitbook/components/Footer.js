import { siteConfig } from '@/lib/config'

const Footer = ({ siteInfo }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-20 bg:white dark:bg-hexo-black-gray justify-center text-center w-full text-sm relative'>
      <hr className='pb-2' />

      <div className='flex justify-center'>
       台科新生懶人包 For Freshman in NTUST © {`${copyrightDate}`}
      </div>

      {siteConfig('BEI_AN') && (
        <>
          <i className='fas fa-shield-alt' />{' '}
          <a href='https://beian.miit.gov.cn/' className='mr-2'>
            {siteConfig('BEI_AN')}
          </a>
          <br />
        </>
      )}
      {/* SEO title */}
      <h1 className='pt-1 hidden'>{siteConfig('TITLE')}</h1>
    </footer>
  )
}

export default Footer

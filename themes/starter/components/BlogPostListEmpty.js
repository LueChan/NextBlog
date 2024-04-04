import { useGlobal } from '@/lib/global'

/**
 * 空白博客 列表
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListEmpty = ({ currentSearch }) => {
  const { locale } = useGlobal()
  return (
    <div className='grow mt-20'>
      <div className="container mx-auto">
        <div className='flex w-full items-center justify-center mx-auto md:-mt-20'>
          <div className='text-gray-500 dark:text-gray-300'>{locale.COMMON.NO_MORE} {(currentSearch && <div>{currentSearch}</div>)}</div>
        </div>
      </div>
    </div>
  )
}
export default BlogPostListEmpty

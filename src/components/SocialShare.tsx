import { Share2, MessageCircle, Linkedin, Twitter } from 'lucide-react'
import { Button } from './ui/button'

interface SocialShareProps {
  title: string
  description: string
  url: string
}

export default function SocialShare({ title, description, url }: SocialShareProps) {
  const shareText = `${title} - ${description}`
  
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Share:</span>
      
      {/* WhatsApp */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.whatsapp, '_blank')}
        className="h-8 w-8 p-0"
        title="Share on WhatsApp"
      >
        <MessageCircle className="h-4 w-4 text-green-600" />
      </Button>
      
      {/* LinkedIn */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.linkedin, '_blank')}
        className="h-8 w-8 p-0"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4 text-blue-600" />
      </Button>
      
      {/* Twitter */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareLinks.twitter, '_blank')}
        className="h-8 w-8 p-0"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4 text-blue-400" />
      </Button>
      
      {/* Native Share (if available) */}
      {navigator.share && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleNativeShare}
          className="h-8 w-8 p-0"
          title="Share"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

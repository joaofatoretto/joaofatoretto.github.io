import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons'

export class Icons {
  static readonly imported = {
    faPlay,
    faWhatsapp,
    faCalendarRegular,
  }

  public static import() {
    library.add(this.imported)
  }
}

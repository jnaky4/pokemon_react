import { Link } from 'react-router-dom'
import './ErrorPage.scss'

export const ErrorPage = ({ errorNumber = 404 }) => {
  let explanation =
    "We're mighty embarrassed that you've wound up here. This page doesn't exist. There are a couple options you can take:"
  switch (errorNumber) {
    case 403:
      explanation = 'You do not have access to this page. If you think this is an error, email support below'
      break
    default:
  }

  return (
    <div className="screen-error">
      <div className="screen-error__error-background">{errorNumber}</div>
      <div className="screen-error__content">
        <p className="screen-error__content--explanation">{explanation}</p>
        <Link className="screen-error__content--link" to="/">
          Return to Home
        </Link>
        {/* <a className="screen-error__content--link" href={`mailto:${window.SCUtils.studioConnectEmail.join(',')}`}>
          Email Support
        </a> */}
      </div>
    </div>
  )
}

export default ErrorPage
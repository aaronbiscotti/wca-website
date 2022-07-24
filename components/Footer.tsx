import React from 'react'
import { Send } from 'tabler-icons-react'

const Footer = () => {
  return (
    <footer className="pt-5 px-10 text-white bg-[#111]">
        <div className="flex flex-col pt-5">
            <div className="flex mb-5 justify-center">
                <div className="basis-1/3">
                <h1 className="text-3xl font-semibold">We Care Act NYC</h1>
                <p className="text-xs text-muted mt-5">We Care Act is a registered, Houston based 501(c)(3) tax-exempt
                    non-profit organization dedicated to engaging youth in
                    community
                    service and increasing social mobility. We Care Act NYC is an affiliate to We Care Act.</p>
                </div>
                <div className="basis-1/5">
                <h5 className="mb-4 mt-3">Links</h5>
                <ul className="text-sm text-[#008bd9]">
                    <li className="mb-2">
                    <h6 className="mb-1">
                        <a className="reset-anchor text-primary" href="/">Home</a>
                    </h6>
                    </li>
                    <li className="mb-2">
                    <h6 className="mb-1">
                        <a className="reset-anchor text-primary" target="_blank"
                        href="https://www.paypal.com/donate/?hosted_button_id=D8WVDK67CNM5L">Donate</a>
                    </h6>
                    </li>
                    <li className="mb-2">
                    <h6 className="mb-1">
                        <a className="reset-anchor text-primary" target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdhMe6zJyZYDNaEjLoWxZSgZU7Ox_TYr3HSdwLrDKUh8qE-qQ/viewform?usp=sf_link">Sign-Up</a>
                    </h6>
                    </li>
                    <li className="mb-2">
                    <h6 className="mb-1">
                        <a className="reset-anchor text-primary" href="index.html#contact">Contact Us</a>
                    </h6>
                    </li>
                </ul>
                </div>
                <div className="basis-1/3">
                <h5 className="mb-4 mt-3">Newsletter</h5>
                <p className="text-xs text-muted">Sign up for our monthly newsletter where we share our latest
                    successes,
                    upcoming events, and more!</p>
                <form>
                    <div className="mt-6 flex items-center">
                        <input className="px-4 py-2 border-dark text-white rounded-0 bg-none" type="search"
                            placeholder="Enter your email address" name="email" aria-label="email address"
                            aria-describedby="button-addon2" />
                        <button className="bg-primary p-2" id="button-addon2" name="submit" type="submit">
                            <Send />
                        </button>
                    </div>
                </form>
                </div>
            </div>
            <div className="py-4 border-top border-dark text-center">
                <p className="mb-0 text-sm text-muted">We Care Act NYC © 2022. All Rights Reserved. Any technical inquiries
                should
                be directed to <a href="mailto: tanga@bxscience.edu">tanga@bxscience.edu</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from "react";
import "./LoginPage.css"

export default function LoginPage() {
  return (
    <div>
      <div id="content-2-wide" class="redesign">
        <div id="signin-options">
          <div>
            <h1 className="Sign-in">Sign in</h1>
            <div class="list-group">
              <a
                href="https://www.MOVIZ.com/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.MOVIZ.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=imdb_us&amp;openid.mode=checkid_setup&amp;siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;tag=imdbtag_reg-20"
                class="list-group-item "
              >
                <span class="auth-sprite imdb-logo retina "></span>
                <span class="auth-provider-text">Sign in with MOVIZ</span>
              </a>
              <a
                href="https://www.MOVIZ.com/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.MOVIZ.com%2Fap-signin-handler&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;idpOptions=%7B%22scope%22%3A%22profile+payments_portal%3A%3Awidget%22%2C%22pageid%22%3A%22lwa%22%7D&amp;openid.assoc_handle=imdb_lwa&amp;openid.mode=checkid_setup&amp;siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9sd2EiLCJyZWRpcmVjdFRvIjoiaHR0cHM6Ly93d3cuaW1kYi5jb20vP3JlZl89bG9naW4ifQ&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;identityProvider=LoginWithAmazon&amp;relyingParty=IMDbPool"
                class="list-group-item "
              >
                <span class="auth-sprite amazon-logo  retina "></span>
                <span class="auth-provider-text">Sign in with Amazon</span>
              </a>
              <a
                href="https://www.MOVIZ.com/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.MOVIZ.com%2Fap-signin-handler&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=imdb_google&amp;openid.mode=checkid_setup&amp;siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9nb29nbGUiLCJyZWRpcmVjdFRvIjoiaHR0cHM6Ly93d3cuaW1kYi5jb20vP3JlZl89bG9naW4ifQ&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;identityProvider=GOOGLE&amp;relyingParty=IMDbPool"
                class="list-group-item "
              >
                <span class="auth-sprite google-logo  retina "></span>
                <span class="auth-provider-text">Sign in with Google</span>
              </a>
              <a
                href="https://www.MOVIZ.com/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.MOVIZ.com%2Fregistration%2Fap-signin-handler%2Fimdb_apple&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=imdb_apple&amp;openid.mode=checkid_setup&amp;siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9hcHBsZSIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;identityProvider=APPLE&amp;relyingParty=IMDbPool"
                class="list-group-item "
              >
                <span class="auth-sprite apple-logo  retina "></span>
                <span class="auth-provider-text">Sign in with Apple</span>
              </a>
              <div
                id="hideableAuthOptionsContainer"
                class="hideable-auth-options-container hidden"
              >
                <a
                  href="https://help.MOVIZ.com/article/issues/GG3BAQ79RAF8ZDEZ/"
                  class="list-group-item "
                >
                  <span class="auth-sprite facebook-logo  retina "></span>
                  <span class="auth-provider-text">Sign in with Facebook</span>
                </a>
              </div>
            </div>
            <p class="divider-text">
              <span>or</span>
            </p>
            <div class="list-group">
              <a
                href="https://www.MOVIZ.com/ap/register?openid.return_to=https%3A%2F%2Fwww.MOVIZ.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=imdb_us&amp;openid.mode=checkid_setup&amp;siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;tag=imdbtag_reg-20"
                class="list-group-item create-account "
              >
                Create a New Account
              </a>
            </div>
            <div id="signin-notice">
              <p class="text-center">
                <small>
                  By signing in, you agree to MOVIZ's{" "}
                  <a href="/conditions">Conditions of Use</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </small>
              </p>
            </div>
          </div>
        </div>

        <div id="signin-perks">
          <h1>Benefits of your free MOVIZ account</h1>
          <p>
            <strong>Personalized Recommendations</strong>
            <br />
            Discover shows you'll love.
          </p>
          <p>
            <strong>Your Watchlist</strong>
            <br />
            Track everything you want to watch and receive e-mail when movies
            open in theaters.
          </p>
          <p>
            <strong>Your Ratings</strong>
            <br />
            Rate and remember everything you've seen.
          </p>
          <p>
            <strong>Contribute to MOVIZ</strong>
            <br />
            Add data that will be seen by millions of people and get cool
            badges.
          </p>
        </div>
        <br class="clear" />
      </div>
    </div>
  );
}

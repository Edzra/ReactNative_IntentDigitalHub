package com.react_intent_digital_hub;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "react_intent_digital_hub";
  }

  //Code for debugging
  @Override
  public boolean onKeyUp(int keyCode, KeyEvent event) {
    Log.d("DEBUG", String.valueOf(keyCode));
    if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN && this.getReactInstanceManager() != null) {
      this.getReactInstanceManager().showDevOptionsDialog();
      return true;
    }
    return super.onKeyUp(keyCode, event);
  }
}

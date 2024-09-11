"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CookieCategory } from "@/lib/cookie-consent/types";
import { useCookieConsent } from "@/lib/cookie-consent/useCookieConsent";
import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export enum CookieDialogSection {
  Intro,
  SetCookies,
}

export const CookieDialog = () => {
  const { accepted } = useCookieConsent();
  const [section, setSection] = useState<CookieDialogSection>(
    CookieDialogSection.Intro
  );

  return (
    <Dialog open={!accepted} modal={false}>
      <DialogContent className="top-auto bottom-8 left-8 translate-x-0 translate-y-0 max-lg:bottom-0 max-lg:left-0">
        {section === CookieDialogSection.Intro && (
          <IntroContent
            onSectionChange={() => setSection(CookieDialogSection.SetCookies)}
          />
        )}
        {section === CookieDialogSection.SetCookies && (
          <SetCookiesContent
            onSectionChange={() => setSection(CookieDialogSection.Intro)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

const IntroContent = ({
  onSectionChange,
}: {
  onSectionChange: (section: CookieDialogSection) => void;
}) => {
  const { setSettings } = useCookieConsent();

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm">
          We use cookies to analyze the browsing and usage of our website and to
          personalize your experience. You can disable these technologies at any
          time, but this may limit certain functionalities of the site.
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSectionChange(CookieDialogSection.SetCookies)}
        >
          Set cookies
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setSettings({
              [CookieCategory.Necessary]: true,
              [CookieCategory.Functionality]: false,
              [CookieCategory.Performance]: false,
            })
          }
        >
          Refuse cookies
        </Button>
        <Button
          className="max-lg:col-span-2"
          variant="accent"
          size="sm"
          onClick={() =>
            setSettings({
              [CookieCategory.Necessary]: true,
              [CookieCategory.Functionality]: true,
              [CookieCategory.Performance]: true,
            })
          }
        >
          Accept cookies
        </Button>
      </div>
    </div>
  );
};

const SetCookiesContent = ({
  onSectionChange,
}: {
  onSectionChange: (section: CookieDialogSection) => void;
}) => {
  const { settings, setSettings } = useCookieConsent();
  const [formValues, setFormValues] = useState(settings);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-base font-medium">Set cookies</h1>
        <p className="text-sm mb-4">
          You can enable and disable the types of cookies you wish to accept.
          However certain choices you make could affect the services offered on
          our sites.
        </p>
        <div className="space-y-2">
          <TermCheckbox
            id={CookieCategory.Necessary}
            label="Necessary cookies (cookies needed for core features, such as login)"
            checked={formValues[CookieCategory.Necessary]}
            disabled
          />
          <TermCheckbox
            id={CookieCategory.Functionality}
            label="Functionality cookies (cookies to remember user preferences)"
            checked={formValues[CookieCategory.Functionality]}
            onCheckedChange={(checked) =>
              setFormValues((prev) => ({
                ...prev,
                [CookieCategory.Functionality]: checked,
              }))
            }
          />
          <TermCheckbox
            id={CookieCategory.Performance}
            label="Performance cookies (cookies for analytics)"
            checked={formValues[CookieCategory.Performance]}
            onCheckedChange={(checked) =>
              setFormValues((prev) => ({
                ...prev,
                [CookieCategory.Performance]: checked,
              }))
            }
          />
        </div>
      </div>
      <div className="space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSectionChange(CookieDialogSection.Intro)}
        >
          Cancel
        </Button>
        <Button
          variant="accent"
          size="sm"
          onClick={() => setSettings(formValues)}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

const TermCheckbox = ({
  checked,
  disabled,
  id,
  label,
  onCheckedChange,
}: {
  checked?: boolean;
  disabled?: boolean;
  id: CookieCategory;
  label: string;
  onCheckedChange?: (checked: boolean) => void;
}) => (
  <div className="flex items-center gap-2">
    <Checkbox
      checked={checked}
      disabled={disabled}
      id={id}
      onCheckedChange={onCheckedChange}
    />
    <label
      htmlFor={id}
      className="text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);

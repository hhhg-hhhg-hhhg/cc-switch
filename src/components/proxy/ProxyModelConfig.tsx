import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export interface ClaudeModelValues {
  defaultModel?: string;
  haikuModel?: string;
  sonnetModel?: string;
  opusModel?: string;
}

interface ProxyModelConfigProps {
  value: ClaudeModelValues;
  onChange: (value: ClaudeModelValues) => void;
}

export function ProxyModelConfig({ value, onChange }: ProxyModelConfigProps) {
  const { t } = useTranslation();

  const updateField = (field: keyof ClaudeModelValues, fieldValue: string) => {
    onChange({ ...value, [field]: fieldValue || undefined });
  };

  return (
    <div className="space-y-3 pt-3 border-t border-primary/10">
      <p className="text-xs font-medium text-primary">
        {t("proxy.modelConfig.title", {
          defaultValue: "Claude Code 模型配置",
        })}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="model-default">
            {t("proxy.modelConfig.defaultModel", {
              defaultValue: "默认模型",
            })}
          </Label>
          <Input
            id="model-default"
            value={value.defaultModel ?? ""}
            onChange={(e) => updateField("defaultModel", e.target.value)}
            placeholder={t("proxy.modelConfig.defaultModelPlaceholder", {
              defaultValue: "例如: claude-sonnet-4-6-latest",
            })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="model-haiku">
            {t("proxy.modelConfig.haikuModel", {
              defaultValue: "Haiku 模型",
            })}
          </Label>
          <Input
            id="model-haiku"
            value={value.haikuModel ?? ""}
            onChange={(e) => updateField("haikuModel", e.target.value)}
            placeholder={t("proxy.modelConfig.haikuModelPlaceholder", {
              defaultValue: "例如: claude-haiku-4-5",
            })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="model-sonnet">
            {t("proxy.modelConfig.sonnetModel", {
              defaultValue: "Sonnet 模型",
            })}
          </Label>
          <Input
            id="model-sonnet"
            value={value.sonnetModel ?? ""}
            onChange={(e) => updateField("sonnetModel", e.target.value)}
            placeholder={t("proxy.modelConfig.sonnetModelPlaceholder", {
              defaultValue: "例如: claude-sonnet-4-6-latest",
            })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="model-opus">
            {t("proxy.modelConfig.opusModel", {
              defaultValue: "Opus 模型",
            })}
          </Label>
          <Input
            id="model-opus"
            value={value.opusModel ?? ""}
            onChange={(e) => updateField("opusModel", e.target.value)}
            placeholder={t("proxy.modelConfig.opusModelPlaceholder", {
              defaultValue: "例如: claude-opus-4-6-latest",
            })}
          />
        </div>
      </div>
    </div>
  );
}

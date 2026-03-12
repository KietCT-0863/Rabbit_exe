import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (input.trim() && !disabled) {
            onSend(input.trim());
            setInput("");
        }
    };

    useEffect(() => {
        if (!disabled) {
            inputRef.current?.focus();
        }
    }, [disabled]);

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full items-center space-x-2 p-4 border-t"
        >
            <Input
                ref={inputRef}
                placeholder="Nhập tin nhắn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={disabled}
                className="flex-1"
            />
            <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || disabled}
                className="shrink-0"
            >
                <Send className="h-4 w-4" />
            </Button>
        </form>
    );
};

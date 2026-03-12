import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
    const isUser = role === "user";

    return (
        <div
            className={cn(
                "flex w-full mb-4 items-end gap-2",
                isUser ? "flex-row-reverse" : "flex-row"
            )}
        >
            <div
                className={cn(
                    "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border shadow",
                    isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}
            >
                {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>
            <div
                className={cn(
                    "relative flex max-w-[80%] flex-col rounded-2xl px-4 py-2 text-sm shadow-sm",
                    isUser
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted text-muted-foreground rounded-bl-none"
                )}
            >
                <span className="whitespace-pre-wrap">{content}</span>
            </div>
        </div>
    );
};

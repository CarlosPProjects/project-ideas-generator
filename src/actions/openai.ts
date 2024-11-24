'use server'

import OpenAI from "openai";

import generateIdeasSchema from '@/schemas/openai.json'
import { ResponseData } from "./generator";
import { Ideas } from "@/types/ideas";

const openai = new OpenAI();

export const generateIdeas = async (data: ResponseData): Promise<Ideas> => {
  try {
    const systemMessage = 'You will generate 8 ideas for a project based on the following criteria: project type, difficulty, and theme. Technologies suggested should be based on the project type and difficulty. The suggested techoologies will be at least 3. Examples technologies are: React, Angular, Python, Java, AWS, Astro, etc.';

    const { type, difficulty, theme, additionalInfo } = data;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system", content: systemMessage
        },
        {
          role: "user", content: `I want to generate ideas for a ${type} project.`
        },
        {
          role: "user", content: `The project should be of ${difficulty} difficulty.`
        },
        {
          role: "user", content: `The project should be based on the theme of ${theme}.`
        },
        {
          role: "user", content: `Aditional information: ${additionalInfo}`
        }
      ],
      response_format: {
        type: "json_schema",
        json_schema: generateIdeasSchema
      }
    })

    const content = response.choices[0].message?.content;
    if (!content) {
      throw new Error("No response from OpenAI");
    }

    const parsedData = JSON.parse(content);

    return parsedData;

  } catch (error) {
    console.error("Error calling OpenAI API", error);
    throw error;
  }
}